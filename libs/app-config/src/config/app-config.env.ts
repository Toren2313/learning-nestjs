// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => ({
  TD_API_KEY: process.env.TD_API_KEY,
  PORT_MAIN: parseInt(process.env.PORT || "3000", 10),
  PORT_PRICES: parseInt(process.env.PORT || "3000", 10),
});

export interface AppConfigInterface {
  TD_API_KEY: string;
  PORT: number;
  PORT_PRICES: number;
}
