import UserForm from 'components/UserForm'
import { useCurrentUserContext } from 'contexts/CurrentUserContext'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadStarsPreset } from 'tsparticles-preset-stars'
import Cocktails from 'public/cocktails.png'

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine)
  }

  render() {
    const options = {
      preset: 'stars',
    }

    return (
      <Particles id={'particles-js'} options={options} init={this.customInit} />
    )
  }
}

const Welcome: NextPage = () => {
  const { currentUser } = useCurrentUserContext()
  const router = useRouter()

  useEffect(() => {
    if (
      currentUser.password !== undefined &&
      currentUser.username !== undefined
    ) {
      router.push('/')
    }
  }, [currentUser, router])

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="align-center flex w-5/6 flex-col items-center rounded-3xl bg-slate-300 p-4 md:w-auto">
          <div className=" text-center">
            <h1>Welcome, please sign up or login to access the Compendium.</h1>
            <span className="text-sm italic">
              Behind this door is every cocktail you could ever dream of...
            </span>
          </div>

          <div className="pb-4">
            <Image src={Cocktails} alt={'Picture of two Cocktails'} />
          </div>
          <UserForm />
        </div>
        <ParticlesContainer />
      </div>
    </>
  )
}

export default Welcome
