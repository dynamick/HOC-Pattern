
import { withLoader } from "./withLoader"

const DogImages = ({data}) => {
    console.log(data)
    return data.message.map((src, index) => (
        <img src={src} alt={`Dog ${index}`} key={index} />
    ))
}

export default withLoader(
    DogImages,
    "https://dog.ceo/api/breed/labrador/images/random/6"
)
