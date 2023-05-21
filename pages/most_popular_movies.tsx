import Container from "@/components/shared/Container"
import Grid from "@/components/shared/Grid"
import { SubTitle, Title } from "@/components/shared/Heading"
import MovieCard from "@/components/shared/MovieCard"
import axios, { Axios, AxiosResponse } from "axios"

export default function MostPopularMovies({ popularMovies }: any) {
  if(popularMovies.length) {
    return(
      <Container>
        <Title color='white'>Top 250 Movies</Title>
        <Grid
          columns={4}
          gap='10px'
        >
          {popularMovies.map((item: any, key: number) => (
            <MovieCard movieDetails={item} key={key} />
          ))}
        </Grid>
      </Container>
    )
  } else {
    return(
      <Container>
          <Title color='#FFF' align='center'>ไม่สามารถโหลดภาพยนตร์</Title>
          <SubTitle color='#E50914'>โปรดลองอีกครั้งภายหลัง</SubTitle>T
      </Container>
    )
  }
}

export async function getStaticProps() {
  try {
    const response: AxiosResponse = await axios.get(
      `https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_API_KEY}`
    )
    const popularMovies: JSON = response.data.items
    return {
      props: {
        popularMovies,
      }
    }
  } catch(error) {
    console.error(error)
    return {
      props: {
        popularMovies: []
      }
    }
  }
}