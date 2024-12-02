import FetchBalance from "@/components/FetchBalance";
import FetchIdentity from "@/components/FetchIdentity";
import FetchRecurring from "@/components/FetchRecurring";
import FetchTransactions from "@/components/FetchTransactions";
import PlaidIntegration from "@/components/PlaidIntegration";

export default function () {
  return (
    <div>
      <h1>Mintly</h1>
      <PlaidIntegration />
      <FetchTransactions />
      <FetchBalance />
      <FetchRecurring />
      <FetchIdentity />
    </div>
  );
}
