import type { NextPage } from 'next'
import Image from 'next/image'
import LogoWithName from 'public/logo_with_name.png'

const Welcome: NextPage = () => {
  return (
    <div className="mt-10 flex h-screen flex-col items-center">
      <div className="mb-10 w-72">
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
        à Curecall, mais ce n&apos;est pas pour autant qu&apos;il est figé ! Si
        tu préfères faire du JS, Sass et j&apos;en passe, fonce !
      </span>
    </div>
  )
}

export default Welcome
