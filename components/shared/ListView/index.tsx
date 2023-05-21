import { Title } from "../Heading";
import { Card, CardBody } from "../Card";
import { ListItem, ListItemImage } from "./style";

interface MovieSearchedDetailes {
  image: string
  title: string
}

interface ListViewProps {
  data: Array<MovieSearchedDetailes>
}

export default function ListView({ data } : ListViewProps) {
  if(data.length) {
    return(
      <Card bg='black' height='300px'>
        <CardBody>
          {data.map((item: MovieSearchedDetailes, key: number) => (
            <ListItem key={key}>
              <ListItemImage src={item.image} height={100} />
              {item.title}
            </ListItem>
          ))}
        </CardBody>
      </Card>
    )
  } else {
    return(
      <Card bg='black'>
        <CardBody>
          <Title
            color='grey'
            align='center'
          >Not Found.</Title>
        </CardBody>
      </Card>
    )
  }
}