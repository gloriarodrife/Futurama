import SpeciesFilter from './SpeciesFilter';

const Header = (props) => {
  return (
    <>
      <div className="header">
        <h1 className="header__img"> </h1>
        <section className="filters">
          <SpeciesFilter
            specieSelected={props.specieSelected}
            handleSpecieSelect={props.handleSpecieSelect}
          />
        </section>
      </div>
    </>
  );
};
export default Header;
