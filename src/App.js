import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Topics from "./components/Topics";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App ">
      {/* Navbar */}
      <Navbar />

      {/* Topics */}
      <Topics />
      <div className="m-4 md:mx-16 xl:flex xl:gap-10  ">
        {/* Profile */}
        <Profile />
        <div className="md:flex sm:gap-10 md:pt-6">
          {/* Interests */}
          <Interests />
          {/* Trending */}
          <Trending />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default App;
