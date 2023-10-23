import Banner from "../Banner/Banner";
import CategoryList from "../Category/categoryList";
import FeatureJobs from "../Featured jobs/FeatureJobs";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <CategoryList></CategoryList>
        <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;