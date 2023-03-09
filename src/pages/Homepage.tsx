import { memo, type FC } from 'react'

const Homepage: FC = memo(() => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
})

Homepage.displayName = 'Homepage'

export default Homepage
