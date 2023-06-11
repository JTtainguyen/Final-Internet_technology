import Image from 'next/image';
import Link from 'next/link';
import './globals.css'

export default function Home() {
  return (
    <main>
      <h1 className='header'>Home</h1>
      <div>
        <p className="intro">Hello and welcome! I am Van Tai Nguyen, and I`m delighted to have you here on my personal homepage. This is where I share my journey, experiences, and passions with the world. Let`s dive in and discover more about who I am.</p>
        <p className='journey'>Throughout my life, I`ve had the privilege of exploring various paths that have shaped me into the person I am today. From my educational endeavors to professional milestones, each step has contributed to my growth and broadened my horizons. I invite you to join me on this ongoing journey of self-discovery.</p>
      </div>
    </main>
  )
}
