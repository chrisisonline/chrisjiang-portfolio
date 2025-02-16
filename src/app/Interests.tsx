import Image from "next/image"
import Chip from "~/ui/Chip"

interface IInterestCard {
  title: string
  imgSrc: string
}

function InterestCard({
  interest: { title, imgSrc },
}: {
  interest: IInterestCard
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={imgSrc}
        alt={title}
        width={200}
        height={200}
        quality={100}
        sizes="300px"
      />
      <Chip>{title}</Chip>
    </div>
  )
}

const interestList: IInterestCard[] = [
  {
    imgSrc:
      "https://utfs.io/f/4HL9EUy6VJbQDWvNVZHiEYB4kiW5sRlJ8SOuQLz0coqMNZPn",
    title: "Electric Unicycles",
  },
  {
    imgSrc:
      "https://utfs.io/f/4HL9EUy6VJbQ7EQzOUJozm15HipkKhYsORjWdNAXgVGFS4BP",
    title: "3D Printing",
  },
  {
    imgSrc:
      "https://utfs.io/f/4HL9EUy6VJbQ1qkl924jJc3Rp80xlMrFqBtVfa4NSQ5nHvYZ",
    title: "Volleyball",
  },

  {
    imgSrc:
      "https://utfs.io/f/4HL9EUy6VJbQNRabuVvIvHCKGdPQXzE2lZAyojrTh06nO8tB",
    title: "Badminton",
  },
  {
    imgSrc:
      "https://utfs.io/f/4HL9EUy6VJbQf1QNKZkI4aSqFU9Q1Hobh3Rk06gTVZtpOy2N",
    title: "Gaming",
  },
  {
    imgSrc:
      "https://utfs.io/f/4HL9EUy6VJbQiNCpT4WYEkRl5vgIq8OCAfxPG9msT4WjFL6B",
    title: "Traveling",
  },
]

export default function Interests() {
  return (
    <section id="interests">
      <h2 className="mb-4">Interests & Hobbies</h2>
      <p className="mb-10">
        Outside of work, I&apos;m always trying and learning new things. These
        are some of my favorite activities!
      </p>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
        {interestList.map((interest) => (
          <InterestCard key={interest.title} interest={interest} />
        ))}
      </div>
    </section>
  )
}
