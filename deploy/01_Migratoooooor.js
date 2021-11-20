const OH_GEEZ = "0x1098269bfc70b26dea43f18f812d2b9854e874ba";
const LEVX = "0xf474E526ADe9aD2CC2B66ffCE528B1A51B91FCdC";
const ROUTER = "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F";

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const swapper = await get("Swapper");

  await deploy("Migratoooooor", {
    from: deployer,
    args: [OH_GEEZ, LEVX, ROUTER, swapper.address],
    log: true,
  });
};
