// So how is the routing in next.js app

// =>File-system based routing mechanism

//     => When a file is added to the pages folder in a project,
//         by default all the files becomes available as a route.

const home = () => {
  return (
    <>
      <h1>Welcome to the real world</h1>
    </>
  );
};

export default home;
