import { useEffect, useState } from "react"
import "./to_top.css"
import "./to_top_mobile.css"
import { assetUrl } from "../../utils/asset_url"

const ToTop = () => {
  const [toTopBtn, setToTopBtn] = useState(false)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setToTopBtn(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 根據狀態判定是否顯示
  if (toTopBtn) {
    return (
      <>
        <div className="to_top">
          <img
            src={assetUrl("/img/web/up_ward.png")}
            alt="A"
            onClick={goToTop}
          />
        </div>
      </>
    )
  }

  // end
  return null
}

export default ToTop
