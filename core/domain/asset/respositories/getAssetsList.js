import AssetEntity from '../model/assetEntity';

const GetAssetsList = async () => {
  const module = await import('../../../../mocks/assets');
  const {assets} = module.default;

  return assets.map(item => AssetEntity(item));
};

export default GetAssetsList;
