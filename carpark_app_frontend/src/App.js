import React from 'react';
import '../src/App.css';
import { Login, Register } from './components/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLogin: true,
    };
  }

  componentDidMount() {
    this.rightSide.classList.add('right');
  }

  changeState() {
    const { activeLogin } = this.state;

    if (activeLogin) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }
    this.setState((prevState) => ({
      activeLogin: !prevState.activeLogin,
    }));
  }

  render() {
    const { activeLogin } = this.state;
    const current = activeLogin ? 'Register' : 'Login';
    const currentActive = activeLogin ? 'login' : 'register';
    return (
      <div className='App'>
        <div className='login'>
          <div className='container' ref={(ref) => (this.container = ref)}>
            {activeLogin && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!activeLogin && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className='right-side'
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className='inner-container'>
        <div className='text'>{props.current}</div>
      </div>
    </div>
  );
};

export default App;
