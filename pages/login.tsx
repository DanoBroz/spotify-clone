import { getProviders, signIn } from 'next-auth/react'

function login({ providers }) {
  return <div className="min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center items-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })} className="p-5 bg-[#18d860] text-white rounded-lg">Login with {provider.name}</button>
        </div>
      ))}
  </div>;
}

export default login;

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    };
}
