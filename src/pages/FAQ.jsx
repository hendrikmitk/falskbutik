import React from 'react';
import Collapsible from '@components/app/FAQ/Collapsible';

const FAQ = () => {
  return (
    <main>
      <h2 className="text-4xl font-medium">FAQ</h2>
      <div className="flex flex-col space-y-4 py-12">
        <Collapsible title="What is a arrel-Aged Scotch Ale?">
          Santa Paws Scotch ale aged in bourbon barrels - light, dry and toasty,
          with vanilla, hints of chocolate and ginger biscuit, and a faint spicy
          hoppiness.
        </Collapsible>
        <Collapsible title="What does Stone Fruit IPA taste like?">
          A one-off beer which combines the sweet and juicy flavour of
          stonefruit with tropical hop aromas. This can features exclusive
          artwork by Tracie Ching.
        </Collapsible>
        <Collapsible title="What means Redacted Collaboration Ale?">
          This mezcal-inspired brew is the shipwrecked remains of a
          collaboration brewed with former craft brewers Ballast Point. Brewed
          to encapsulate the flavours of mezcal, this beer smoulders with peaty
          and light woody notes, as well as intense fruity character.
        </Collapsible>
        <Collapsible title="Is the Nesting Hop Bomb explosive?">
          The levels of hops vary throughout the range. We love hops, so all
          four beers are big, bitter badasses, but by tweaking the amount of
          each hop used later in the boil and during dry- hopping, we can
          balance the malty backbone with some unexpected flavours. Simcoe is
          used in the whirlpool for all four beers, and yet still lends
          different characters to each.
        </Collapsible>
      </div>
    </main>
  );
};

export default FAQ;
