import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    fullName: "riadh bakhti" ,
    bio: "entrepreuneur and Full stack JavaScript Developer",
    imgSrc:"./rb.JPG",
    profession:"Full stack JavaScript Developer",
    show: false ,
    cnt: 0 ,

  };
  handleClick = () => {
    this.setState({ show : !this.state.show });
    this.setState({cnt : this.state.cnt = 0});
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((laststate) => ({
        cnt: laststate.cnt + 1,
      }));
    },1000);
  }
  render() {
    return (

        <div className="profile app">
         
        
          <div className="card">

            {this.state.show && (
             
              <div className="data">
                <div className=" Myimg">
                  <img src={this.state.imgSrc} alt="" />
                </div>
                <section className="profile">
                 
                  <h1>{this.state.fullName}</h1>
                  <h3>{this.state.profession}</h3>
                  <p>{this.state.bio}</p>
                
                  <div className="count">
                    Count :{this.state.cnt}{" "}
                    sec
                  </div>
                </section>
              
              </div>
            )}
          
            <button type="button" className="btn" onClick={this.handleClick}>
              {this.state.show  ? "Hide me" :"Show me" }
            </button>
          </div>

        
        </div>
      );
    }
  }

export default App;
