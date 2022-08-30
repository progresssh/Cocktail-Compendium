import type { NextPage } from 'next'
import Image from 'next/image'
import LogoWithName from 'public/logo_with_name.png'

const Welcome: NextPage = () => {
  return (
    <div className="flex items-center h-screen flex-col mt-10">
      <div className="w-72 mb-10">
        <Image src={LogoWithName} alt="Curecall logo" />
      </div>
      <span className="text-lg font-semibold">Hello ! 👋</span>
      <span>Bienvenue au test technique front-end Curecall</span>
      <span>
        Je te laisse explorer tout le projet, tu y trouveras toutes les
        informations nécessaires, bon courage !
      </span>
      <span className="mt-10">
        Ce projet n&apos;est qu&apos;une template basé sur notre stack favorite
        à Curecall, mais ce n&apos;est pas pour autant qu&apos;il est figée ! Si
        tu préfères faire du JS, Sass et j&apos;en passe, fonce !
      </span>
    </div>
  )
}

export default Welcome
