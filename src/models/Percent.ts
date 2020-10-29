export class Percent {
    private Value: number;

    /**
     * Includes special handling for Percentage data
     *
     * @param x - Percentage as whole number, e.g. 40% should be entered as '40'
    */
    constructor(x: number) {
      this.Value = x;
    }

    /**
     * Returns value as a modifier, e.g. 40% will be 0.4
    */
    get value(): number {
      return this.Value / 100;
    }

    set value(x: number) {
      if (x < 0) {
        throw new Error('Percent value cannot be negative');
      }
      this.Value = x;
    }

    get rawValue(): number {
      return this.Value;
    }
}
