import LoaderContainer from "app/components/LoaderContainer";
import { Circle } from "rc-progress";
import { useParams } from "react-router-dom";
import tw, { styled } from "twin.macro";
import TokenSection from "./components/TokenSection";
import useGetOffering from "./hooks/useGetOffering";

export default function FleetDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, getOffering, error } = useGetOffering(id as string);

  const percentageMinted =
    data && +((+data?.account.minted / +data?.account.shares) * 100).toFixed(1);

  return (
    <LoaderContainer
      loading={isLoading}
      page
      onRetry={getOffering}
      error={!!error}
      errorMessage={error?.message}
    >
      <Container>
        <p className="text-[20px] font-medium text-[#1E1E1E] mb-[30px]">
          {data?.account.tokenData.name}
        </p>
        <div className="description">
          <div className="basis-[75%]">
            <p className="text-[18px] font-medium text-[#1E1E1E] mb-[10px]">
              Description
            </p>
            <p className="text-[16px] font-[300] leading-[24px]">
              {data?.account.tokenData.description}
            </p>
          </div>
          <div className="progress">
            <div>
              <Circle
                strokeWidth={10}
                percent={percentageMinted}
                trailWidth={10}
                strokeColor="#FE991E"
                trailColor="#F2F2F2"
              />

              <div>
                <p className="text-[12px] font-normal text-[#959595]">
                  Purchased
                </p>
                <p className="text-[24px] font-[500]">{percentageMinted}%</p>
              </div>
            </div>
          </div>
        </div>
        <TokenSection data={data} />
      </Container>
    </LoaderContainer>
  );
}

const Container = styled.div`
  ${tw`mb-[30px]`}
  .description {
    ${tw`flex gap-[50px] mobile:flex-col`}
  }
  .progress {
    ${tw`w-[160px] h-[160px] mobile:self-center`}

    >div {
      ${tw`relative`}
      >div {
        ${tw`flex flex-col items-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}
      }
    }
  }
`;
