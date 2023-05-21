import { useState } from "react";
import { Input, SearchForm, SubmitButton } from "./style"

export default function Search({  }) {
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (): void => {
    
  }

  return(
    <SearchForm onSubmit={handleSubmit}>
      <Input placeholder='The Good, the Bad and the Ugly' name='title' onChange={(e) => setTitle(e.target.value)} />
      <SubmitButton>
        ค้นหา
      </SubmitButton>
    </SearchForm>
  )
}