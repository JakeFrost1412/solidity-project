const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const myContractFactory = await hre.ethers.getContractFactory("myContract");
    const myContract = await myContractFactory.deploy();
    await myContract.deployed();

    console.log("Contract deployed to:", myContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await myContract.getTotalWaves();

    let waveTxn = await myContract.wave();
    await waveTxn.wait();

    waveCount = await myContract.getTotalWaves();

    waveTxn = await myContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await myContract.getTotalWaves();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();