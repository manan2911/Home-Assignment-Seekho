export const fetchData = async () => {
  try {
    const response = await fetch(
      "http://preprod.seekhoapp.com/api/v1.3/premium/premium-plans/?coupon_code=DEFAULT"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
