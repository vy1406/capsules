import React , { useEffect } from 'react';
import { connect } from "react-redux";
import { getCountries, initCountries } from './store/actions'

const Countries = ( {
    getCountries,
    initCountries,
    isLoading,
    isError,
    countries
}) => {

    useEffect(() => {
        getCountries()
        return () => {
          initCountries()
        }
    }, [])

    return (
      <div style={{ padding: "1rem 0" }}>
        <h2>Countries</h2>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>ERROR!</h1>}
        {countries.map(singleCountry => (
            <div key={singleCountry.name.official}>
                {singleCountry.name.official}
            </div>
        ))}
      </div>
    );
  }

const mapDispatchToProps = {
    getCountries,
    initCountries
};

const mapStateToProps = state => ({
    countries: state.countryReducer.countries,
    isError: state.globalReducer.isError,
    isLoading: state.globalReducer.isLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);