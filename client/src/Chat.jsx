import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const Chat = () => {
    return (
        <div>
Window
        </div>
    )
}

export default () => (
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
)