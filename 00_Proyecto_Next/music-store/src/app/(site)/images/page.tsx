import Image from "next/image";
import homeCarrousel from "../../../../public/home-carrousel03.jpg";

export default function Page() {
  return (
    <div>
      <Image
        src={homeCarrousel}
        alt="Picture of the author"
        // width={1500}
        // height={1500}
        //blurDataURL="data:..." //provisto atuomáticamente a partir del import estatico
        placeholder="blur" // Blur-up opcional
        sizes="100vh"
      />
    </div>
  );
}

{
  /* <Image
  src={homeCarrousel}
  alt="Picture of the author"
  //width={500} //provisto atuomáticamente a partir del import estatico
  //height={500} //provisto atuomáticamente a partir del import estatico
  // blurDataURL="data:..." provisto atuomáticamente a partir del import estatico
  placeholder="blur" // Blur-up opcional
/> */
}
