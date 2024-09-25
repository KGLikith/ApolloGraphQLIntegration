import Header from './components/header'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Route,Routes } from "react-router-dom"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

// so that there is no error...
const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        users:{
          merge(existing,incoming){
            return incoming
          }
        },
        posts:{
          merge(existing,incoming){
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri:'http://localhost:3000/graphql',
  cache
})

function App() {


  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      
    </ApolloProvider>
    </>
  )
}

export default App
