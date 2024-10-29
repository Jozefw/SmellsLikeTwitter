import {useState} from 'react';
import Post from '../components/Post';
import PostList from '../components/PostList';
import MainHeader from '../components/MainHeader.jsx'

function App() {
  const [modalVisible,setModalVisible] = useState(false);

  function hideModal(){
    setModalVisible(false);
}
  function showModal(){
    setModalVisible(true);
}

  return (
    <>
    <MainHeader onCreatePost={showModal}></MainHeader>
    <main>
      <PostList 
      isNewPosting={modalVisible}
      finishedPosting={hideModal}>
      </PostList>
    </main>
    </>
      
  )
}

export default App;
