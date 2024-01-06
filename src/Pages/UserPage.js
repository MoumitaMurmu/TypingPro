import React, { useEffect, useState } from 'react';

// Import necessary dependencies and components
import { auth, db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import TableUserData from '../Components/TableUserData';
import Graph from '../Components/Graph';
import UserInfo from '../Components/UserInfo';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const UserPage = () => {
  // State to manage user data, graph data, and loading states
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  // UseAuthState to check user authentication status
  const [user, loading] = useAuthState(auth);

  // UseNavigate for programmatic navigation
  const navigate = useNavigate();

  // Function to fetch user data from Firestore
  const fetchUserData = () => {
    const resultsRef = db.collection('Results');
    const { uid } = auth.currentUser;
    let tempData = [];
    let tempGraphData = [];

    resultsRef
      .where('userID', '==', uid)
      .orderBy('timeStamp', 'desc')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          tempData.push({ ...doc.data() });
          tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0], doc.data().wpm]);
        });

        // Reverse graphData to show the latest data first
        setGraphData(tempGraphData.reverse());
        setData(tempData);
        setDataLoading(false);
      });
  }

  useEffect(() => {
    // Check user authentication and fetch data on component mount
    if (!loading) {
      fetchUserData();
    }

    // Redirect to the homepage if user is not authenticated
    if (!loading && !user) {
      navigate('/');
    }
  }, [loading]);

  // Display loading spinner while data is being fetched
  if (loading || dataLoading) {
    return <div className='center-of-screen'><CircularProgress size={300} /></div>;
  }

  return (
    <>
      {/* Header component */}
      <Header />

      <div className='user-result'>
        {/* User information component */}
        <UserInfo totalTestsTaken={data.length} />

        <div className='graph-user-page'>
          {/* Graph component displaying user's typing performance over time */}
          <Graph graphData={graphData} />
        </div>

        {/* Table displaying detailed user data */}
        <TableUserData data={data} />
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default UserPage;
