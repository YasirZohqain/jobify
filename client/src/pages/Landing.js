import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/landingWrapper';

import Logo from '../components/Logo';


const Landing = () => {
  return (
        <Wrapper>
            <nav>
              <Logo/>
            </nav>
            <div className='container page'>
                <div className='info'>
                <h1>Job <span>tracking</span> apps</h1>
                <p>Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.</p>
                <button className='btn btn-hero'>login / register</button>
                </div>
                <img src={main} alt='main' className='img main-img' />
            </div>
        </Wrapper>
  )
}



export default Landing
