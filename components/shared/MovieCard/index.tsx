import { Card, CardImage, CardBody, CardTitle } from "../Card"

interface MovieDetails {
  image: String
  fullTitle: String
  year: String
  genres: Array<String>
  duration: String
  plot: String
}

export default function MovieCard({movieDetails}: any) {
  return(
    <Card>
      <CardImage src={movieDetails.image} />
      <CardBody>
        <CardTitle>{movieDetails.fullTitle}</CardTitle>
      </CardBody>
    </Card>
  )
}