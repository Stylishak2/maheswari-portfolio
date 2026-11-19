
import './MyWork.css';
import MyWorks from '../../assets/MyWorks';
import arrow from '../../assets/arrow.png';

const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>

      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>

      <div className='mywork-container'>
         {MyWorks.map((work) => (
          <img
            key={work.w_no}
            src={work.w_img}
            alt={work.w_name}
            className='image'
          />
          
        ))}
      </div> 
    </div>
  );
};

export default MyWork;
