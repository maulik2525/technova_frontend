import React from "react";

class App extends React.Component {
    state = {
      shouldNotSwipe: false,
    }
  
    toggleSwiping = () => {
      this.setState({
        shouldNotSwipe: !this.state.shouldNotSwipe
      });
    }
   
    render() {
      const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        rebuildOnUpdate: true,
        noSwiping: this.state.shouldNotSwipe,
        shouldSwiperUpdate: true,
      }
      
      return (
        <div>
          React id swiper
          <button onClick={this.toggleSwiping}>Toggle Swiping</button>
          Should swipe: {this.state.shouldNotSwipe}
          <ReactIdSwiper {...params}>
            <div className="slide1">Slide 1</div>
            <div className="slide2">Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
          </ReactIdSwiper>
        </div>
      );
    }
  }
  
  ReactDOM.render(
      <App />,
    document.getElementById('root')
  );