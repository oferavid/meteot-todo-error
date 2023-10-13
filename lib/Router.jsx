FlowRouter.router("/", {
    name: "Home",
    action(param){
        renderView(<Home />); //A function called renderView we created that we passed a component.
    }
});

function renderView(component){
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />,
        logThis: "This is a property."
    });
}