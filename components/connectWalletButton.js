const ConnectWalletButton = (props) => {
    return (
      <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
        {!props.isConnected ? (
          <button onClick={props.onClick} className="bg-violet-500 hover:bg-violet-600 focus:ring-violet-500 border-violet-500 text-violet-50 inline-block w-full rounded-md border py-5 px-7 text-center text-base font-medium leading-4 shadow-sm focus:ring-2 focus:ring-opacity-50 md:text-lg" onClick={props.onClick}>
            CONNECT WALLET
          </button>
        ) : (
          <div>
            WALLET CONNECTED: {props.address} <br /><br />
          </div>
        )}
      </div>
    );
  };
  
  export default ConnectWalletButton;