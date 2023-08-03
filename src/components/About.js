import React from 'react'

export default function About(props) {

  //useState 1
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  let myStyle = {
    color: props.mode === 'dark'?'white':'#090101',
    backgroundColor: props.mode ==='dark'?'#090101':'white',
    // border: '1px solid',
    // borderColor: props.mode === 'dark'?'white':'#090101'
  }

  //useState2
  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:'black',
  //       border: '1px solid white'
  //     })
  //     setBtnText("Enable Light Mode");
  //   }
  //   else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText("Enable Dark Mode");
  //   }
  // }

  return (
    <div classNameName="container" style={myStyle}>
      <h1 classNameName="my-3">About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or preview of text.</div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
          </div>
        </div>

      </div>

      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}

    </div>
  )
  }
