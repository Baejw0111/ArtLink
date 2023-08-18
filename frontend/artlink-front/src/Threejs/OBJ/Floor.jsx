import { RigidBody } from "@react-three/rapier";
import { useFrame, useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export default function Floor() {
  const [roughness, normal] = useLoader(TextureLoader, [
    "../../../public/terrain-normal.jpg",
    "../../../public/terrain-roughness.jpg",
  ]);
  roughness.wrapS = roughness.wrapT = RepeatWrapping;
  normal.wrapS = normal.wrapT = RepeatWrapping;

  const textureRepeat = 100;
  roughness.repeat.set(textureRepeat, textureRepeat);
  normal.repeat.set(textureRepeat, textureRepeat);

  return (
    <RigidBody type="fixed">
      <mesh castShadow receiveShadow position={[0, -3.5, 0]}>
        <boxGeometry args={[300, 5, 300]} />
        <meshStandardMaterial
          color="lightblue"
          envMapIntensity={0}
          normalMap={normal}
          normalScale={[0.15, 0.15]}
          roughnessMap={roughness}
          dithering={true}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}
        />
      </mesh>
    </RigidBody>
  );
}
