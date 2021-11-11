const OH_GEEZ = "0x1098269bfc70b26dea43f18f812d2b9854e874ba";
const LEVX = "0xf474E526ADe9aD2CC2B66ffCE528B1A51B91FCdC";

export default async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Swapper", {
    from: deployer,
    args: [OH_GEEZ, LEVX],
    log: true,
  });
};
