
import { Hero, Breadcrumbs } from "@components/common"
import { AppList } from "@components/app"
import { BaseLayout } from "@components/layout"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <AppList />
    </BaseLayout>
  )
}
