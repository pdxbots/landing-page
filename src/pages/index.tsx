import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { missionStatement, keyPoints }from '../constants/strings'
import { Box, Typography } from '@mui/material'
import { colors, mediaQueriesThresholds } from '../constants/constants.js'
import useWindowSize from '@/utils/useWindowSize'
import RenderIf from '@/components/RenderIf/RenderIf'
import DropDownText from "@/components/DropDownText/DropDownText"


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {
  const { width } = useWindowSize()

  const dropDownTextList = keyPoints.map((keyPoint) => {
    return <DropDownText key={keyPoint.title} textObject={keyPoint}/>
  })

  return (
    <>
      <Head>
        <title>PDX Bots</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <RenderIf isTrue={width && width > mediaQueriesThresholds.mobile}>
        <Box sx={{
          width: '50vw',
          height: '100%',
          position:'absolute',
        }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}computerworks.gif`}
              alt="background"
              fill
              style={{
                objectFit: 'cover',
                opacity: '0.7',
              }}
              />
          </Box>
        </RenderIf>
        <Box
          sx={{
            width: '100vw',
            height: '100%',
            display: 'flex',
          }}>
          <Box>
          <Typography
            sx={{
              margin: '2rem',
              marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '55vw': '2rem',
              marginTop:'10vh',
              opacity:'0.5',
              color: colors.text
            }}
            >{missionStatement.opening}
          </Typography>
          <Typography
            sx={{
              margin: '2rem',
              marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '55vw': '2rem',
              marginTop:'10vh',
              opacity:'0.5',
              color: colors.text
            }}
            >{keyPoints.map((keyPoint) => <DropDownText key={keyPoint.title} textObject={keyPoint}/> )}
          </Typography>
          <Typography
            sx={{
              margin: '2rem',
              marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '55vw': '2rem',
              marginTop:'10vh',
              opacity:'0.5',
              color: colors.text
            }}
            >{missionStatement.closing}
          </Typography>
          </Box>
        </Box>
      </main>
    </>
  )
}

export default Home