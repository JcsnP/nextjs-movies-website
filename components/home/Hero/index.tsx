import BackgroundImage from "@/components/shared/BackgroundImage";
import Container from "@/components/shared/Container";
import { SubTitle, Title } from "@/components/shared/Heading";
import ListView from "@/components/shared/ListView";
import { Input, SearchForm } from "@/components/shared/Search/style";
import axios from "axios";
import { useState } from "react";

import background_image from '../../../public/static/images/movie-collage.jpeg'

interface MovieSearchedDetailes {
  image: string
  title: string
}

export default function Hero() {
  const [searchResult, setSearchResult] = useState<Array<MovieSearchedDetailes>>([])
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const handleSearch = async(title: String) => {
    console.log(title)
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/SearchTitle/<API_KEY>/${title}`
      )
      if(response.status === 200) {
        console.log(response.data.results)
        setSearchResult(response.data.results)
      }
    }catch(error) {
      console.error(error)
    }
  }

  const handleInputChange = (e: { target: { value: String; }; }) => {
    if(timer) {
      clearTimeout(timer)
    }
    const newTimer = setTimeout(() => {
      handleSearch(e.target.value)
    }, 1500)

    setTimer(newTimer)
  }

  return(
    <BackgroundImage
      height='100vh'
      image={background_image}
    >
      <Container>
          <Title color='#FFF'>ภาพยนตร์ รายการทีวี และความบันเทิง</Title>
          <SubTitle color='#bcbcbc'>สำรวจ และค้นหาภาพยนต์ที่คุณต้องการ</SubTitle>

          <SearchForm>
            <Input placeholder='The Good, the Bad and the Ugly' name='title' onChange={handleInputChange} />
          </SearchForm>

          {
            searchResult.length && (
              <ListView data={searchResult} />
            )
          }
        </Container>
    </BackgroundImage>
  )
}