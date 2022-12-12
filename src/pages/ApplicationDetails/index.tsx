import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import ApplicationForm from "../../components/Forms/ApplicationForm";
import { Header } from "../../components/Header";
import { IAppProps, IAppState } from "../../containers/Main/Main.types";
import { mapDispatchToProps, mapStateToProps } from "../../containers/Main";

export const ApplicationDetails = ({
  appStoreReducer,
  getApplicationDetails,
}: IAppProps & IAppState) => {
  const [cookies] = useCookies(["sessionId"]);
  const { id } = useParams();

  useEffect(() => {
    if (id) getApplicationDetails(id);
  }, [id, getApplicationDetails]);


  if (!cookies["sessionId"]) 
  return <Navigate to="/login" replace={true} />;
  else
    return (
      <>
        <div className="App">
          <Header />
          <main className="App-main">
            {appStoreReducer.activeApplication && (
              <ApplicationForm
                activeApplication={appStoreReducer.activeApplication}
                isEditable
              />
            )}
          </main>
        </div>
      </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDetails);
