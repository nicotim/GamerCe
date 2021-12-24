import React from "react";
import ItemListContainer from "../itemListContainer";

const Delay = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [show])

  if (!show) return null

  return <ItemListContainer />
}

export default Delay;