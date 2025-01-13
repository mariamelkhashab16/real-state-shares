import {useNavigate} from  'react-router-dom';
const Home = () => {
    const navigate = useNavigate(); 


    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button
          onClick={()=> navigate('/dashboard')}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Go to Dashboard
        </button>

        <button
        onClick={() => navigate('/properties/add-property')}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', margin: '10px' }}
      >
        List New Property
      </button>
      </div>
    );
  };

  export default Home;