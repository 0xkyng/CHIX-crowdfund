import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import ShowCampaign from "./component/ShowCampaign";
import useCampaign from "./hooks/useCampaign";


function App() {
    const retrievecampaign = useCampaign();
    console.log(retrievecampaign)
    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <CreateCampaign />
                <ShowCampaign />
            </main>
        </div>
    );
}

export default App;
