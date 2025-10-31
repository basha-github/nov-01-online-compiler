import { Box, Flex } from '@chakra-ui/react';
import SideBar from './SideBar';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PracticeDashboard from './PracticeDashboard';


const PracticeMain = () => {

  const {id} = useParams();

  useEffect(
    ()=>{
      console.log("data .."+id);
    },[]
  )
  return (
    <Flex>
     
       {<SideBar />}
      

      {/* Main Content */}
      <Box flex="1" p={6} bg="gray.50">
        <PracticeDashboard >{id}</PracticeDashboard>
      </Box>
    </Flex>
  );
};

export default PracticeMain;
