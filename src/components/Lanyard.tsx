/* eslint-disable react/no-unknown-property */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

// Extend Three.js JSX elements for MeshLine
extend({ MeshLineGeometry, MeshLineMaterial });

function Band({
  isMobile = false,
  frontImage = "/images/fauzan-06.png",
  backImage = "/images/belakang-06.png",
}: {
  isMobile?: boolean;
  frontImage?: string;
  backImage?: string;
}) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);
  const clipRingRef = useRef<THREE.Group>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const ringWorldPos = useMemo(() => new THREE.Vector3(), []);

  const segmentProps = {
    type: "dynamic" as const,
    canSleep: true,
    colliders: false as const,
    angularDamping: 2,
    linearDamping: 2,
  };

  const [frontTex, backTex] = useTexture([frontImage, backImage]);

  // Deep Navy Blue (#172D68) Texture with Single Upright "⚛  Medskill" Text
  const lanyardTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Deep Rich Navy Blue (#172D68) Base
    ctx.fillStyle = "#172D68";
    ctx.fillRect(0, 0, 1024, 128);

    // Crisp White Top & Bottom Edges
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 1024, 8);
    ctx.fillRect(0, 120, 1024, 8);

    // Flip canvas horizontally so MeshLine UV mapping renders text 100% correctly forward
    ctx.save();
    ctx.translate(1024, 0);
    ctx.scale(-1, 1);

    // Single Upright "⚛  Medskill" Text & React Atom Icon centered along the ribbon length
    ctx.font = "bold 44px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⚛  Medskill", 512, 64);

    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  // Rope joints setup
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.4]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.4]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.4]);

  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.2, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (0 + clampedDistance * 50)
        );
      });

      // Track exact 3D world position of metal clip ring
      if (clipRingRef.current) {
        clipRingRef.current.getWorldPosition(ringWorldPos);
        curve.points[0].copy(ringWorldPos);
      } else {
        curve.points[0].copy(j3.current.translation());
      }

      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);

      // Extend top curve point curve.points[3] UPWARDS so strap reaches top border line
      const fixedPos = fixed.current.translation();
      curve.points[3].set(fixedPos.x, fixedPos.y + 3.2, fixedPos.z);

      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      {/* Top Anchor Fixed RigidBody */}
      <group position={[0, 4.5, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.4, -0.8, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.8, -1.6, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.2, -2.4, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[1.2, -3.6, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[1.2, 1.8, 0.04]} />

          <group
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              (e.target as HTMLElement).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            {/* Metal Ring Clip */}
            <group ref={clipRingRef} position={[0, 1.2, 0]}>
              <mesh position={[0, 0, 0]}>
                <torusGeometry args={[0.26, 0.05, 16, 32]} />
                <meshStandardMaterial color="#8e8e93" metalness={0.9} roughness={0.1} />
              </mesh>
              <mesh position={[0, -0.22, 0]}>
                <cylinderGeometry args={[0.09, 0.09, 0.28, 16]} />
                <meshStandardMaterial color="#8e8e93" metalness={0.9} roughness={0.1} />
              </mesh>
            </group>

            {/* Card Body Mesh */}
            <mesh position={[0, -1.2, 0]}>
              <boxGeometry args={[3.0, 4.6, 0.05]} />
              <meshStandardMaterial attach="material-0" color="#161616" roughness={0.3} />
              <meshStandardMaterial attach="material-1" color="#161616" roughness={0.3} />
              <meshStandardMaterial attach="material-2" color="#161616" roughness={0.3} />
              <meshStandardMaterial attach="material-3" color="#161616" roughness={0.3} />
              <meshStandardMaterial attach="material-4" map={frontTex} roughness={0.25} metalness={0.1} />
              <meshStandardMaterial attach="material-5" map={backTex} roughness={0.25} metalness={0.1} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* Upright Deep Navy Blue (#172D68) Physics Ribbon Band */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#ffffff"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap={lanyardTexture ? 1 : 0}
          map={lanyardTexture || undefined}
          repeat={[1, 1]}
          lineWidth={2.2}
        />
      </mesh>
    </>
  );
}

export function Lanyard({
  frontImage = "/images/fauzan-06.png",
  backImage = "/images/belakang-06.png",
}: {
  frontImage?: string;
  backImage?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative h-[900px] w-full pointer-events-auto overflow-visible">
      <Canvas
        camera={{ position: [0, -1.2, 23], fov: 27 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: true, antialias: true }}
        className="h-full w-full"
      >
        <ambientLight intensity={1.6} />
        <Physics gravity={[0, -25, 0]} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} frontImage={frontImage} backImage={backImage} />
        </Physics>

        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
