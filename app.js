function App() {
    return (
        <>
            <div className="px-16 py-16 bg-[red] shadow-lg shadow-indigo-500/50">
                <h1 className="text-6xl text-center bg-[blue] font-bold py-4">Learn web development</h1>
                <div>
                <p className="pb-2 pt-8 text-justify font-semibold">
                    Welcome to the MDN learning area. This set if articles aims to guide complete beginners to web development with all that they need to start coding websites.
                </p>
                </div>
                <div>
                <p className="py-2 text-justify font-semibold">
                    The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner". From there, you should be able to start making your way, learning from <a className="underline text-sky-600">the rest of MDN</a> and other intermediate to advanced resources that assume a lot of previous knowledge.
                </p>
                </div>
                <div>
                <p className="py-2 text-justify font-semibold">
                    If you are a complete beginner, web developmentcan be challanging-we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development(on you own or as part of a class), a teacher looking for class materails, a hobbyist, or someone who just wants to understand more about how web technologies work
                </p>
                </div>
            </div>
        </>
    )  
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />)